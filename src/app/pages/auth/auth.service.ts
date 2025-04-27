import { Injectable, inject, NgZone, runInInjectionContext } from '@angular/core';
import { Router } from '@angular/router';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  authState,
} from '@angular/fire/auth';
import { Firestore, doc, setDoc, getDoc } from '@angular/fire/firestore';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = inject(Auth);
  private firestore = inject(Firestore);
  private router = inject(Router);
  private ngZone = inject(NgZone); // inject NgZone

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  // Signup method
  async signup(
    name: string,
    email: string,
    password: string,
    phone: string,
    age: string
  ) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      const user = userCredential.user;
      if (user) {
        const userRef = doc(this.firestore, `users/${user.uid}`);
        await setDoc(userRef, {
          name,
          email,
          phone,
          age,
          uid: user.uid,
        });
        return userCredential;
      } else {
        throw new Error('User creation failed');
      }
    } catch (error) {
      throw error;
    }
  }

  // Login method
  // async login(email: string, password: string) {
  //   try {
  //     return await signInWithEmailAndPassword(this.auth, email, password);
  //   } catch (error: any) {
  //     console.error('Login error:', error);
  //     throw new Error(error.message || 'Login failed');
  //   }
  // }

  async login(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      const user = userCredential.user;

      if (user) {
        const userDoc = await this.getUserData(user.uid);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          localStorage.setItem('user', JSON.stringify(userData));
        }
      }
      return userCredential;
    } catch (error: any) {
      console.error('Login error:', error);
      throw new Error(error.message || 'Login failed');
    }
  }

  getLoggedInUser() {
    const userString = localStorage.getItem('user');
    if (userString) {
      return JSON.parse(userString); // returns {name, email, age, phone, uid}
    }
    return null;
  }

  // Logout method
  logout() {
    return signOut(this.auth).then(() => this.router.navigate(['/login']));
  }

  // Check if user is logged in (auth state observable)
  isLoggedIn() {
    return authState(this.auth);
  }

  // Updated getUserData()
  async getUserData(uid: string) {
    const userRef = doc(this.firestore, `users/${uid}`);
    const userDoc = await getDoc(userRef);
    return userDoc;
  }
}
