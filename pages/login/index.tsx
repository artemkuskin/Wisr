import styles from "@/styles/Login.module.css";
import { useState } from "react";
const login = () => {
  const [loginForm, setLoginForm] = useState(true);
  return (
    <div className={styles.contant}>
      <div className={loginForm ? styles.loginForm : styles.deleteLoginForm}>
        <div className={loginForm ? styles.titleLogin : styles.titleLoginDelete}>
          <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNTQiIHZpZXdCb3g9IjAgMCA0NSA1NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik00NC4xNTgxIDBDNDQuMTU4MSAwIDI2LjQ3ODEgMy40NCAyMi4wNzgxIDIzLjEyVjU0QzQyLjg3ODEgNDguOTYgNDQuMDc4MSAyNS4zNiA0NC4xNTgxIDIxLjZWMFoiIGZpbGw9IiMzMjNGNTEiLz4KPHBhdGggZD0iTTQ0LjE2IDBIMEMwIDAgMTcuNjggMy40NCAyMi4wOCAyMy4xMkMyNi40OCAzLjQ0IDQ0LjE2IDAgNDQuMTYgMFoiIGZpbGw9IiM2MkM0QkIiLz4KPHBhdGggZD0iTTIyLjA4IDIzLjEyQzE3LjY4IDMuNTIgMCAwIDAgMFYyMS41MkMwLjA4IDI1LjM2IDEuMjggNDguOTYgMjIuMDggNTMuOTJWMjMuMTJaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNNy4wMzkzOCAxMy41MTk4QzQuNzk5MzcgMTUuNzU5OCA0Ljc5OTM3IDE5LjI3OTggNy4wMzkzOCAyMS41MTk4QzkuMTk5MzggMjMuNzU5OCAxMi43OTk0IDIzLjc1OTggMTUuMDM5NCAyMS41MTk4QzE3LjI3OTQgMTkuMzU5OCAxNy4yNzk0IDE1Ljc1OTggMTUuMDM5NCAxMy41MTk4QzEyLjc5OTQgMTEuMjc5OCA5LjI3OTM4IDExLjI3OTggNy4wMzkzOCAxMy41MTk4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTExLjI4MDQgMTguNTU4OEMxMC43MjA0IDE4LjYzODggMTAuMTYwNCAxOC4zMTg4IDEwLjAwMDQgMTcuNjc4OEM5LjkyMDM2IDE3LjExODggMTAuMjQwNCAxNi41NTg4IDEwLjg4MDQgMTYuMzk4OEMxMS40NDA0IDE2LjMxODggMTIuMDAwNCAxNi42Mzg4IDEyLjE2MDQgMTcuMjc4OEMxMi4xNjA0IDE3LjgzODggMTEuODQwNCAxOC4zOTg4IDExLjI4MDQgMTguNTU4OFoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0yOS4xMjE0IDEzLjUxOThDMjYuODgxNCAxNS43NTk4IDI2Ljg4MTQgMTkuMjc5OCAyOS4xMjE0IDIxLjUxOThDMzEuMzYxNCAyMy43NTk4IDM0Ljg4MTQgMjMuNzU5OCAzNy4xMjE0IDIxLjUxOThDMzkuMzYxNCAxOS4zNTk4IDM5LjM2MTQgMTUuNzU5OCAzNy4xMjE0IDEzLjUxOThDMzQuODgxNCAxMS4yNzk4IDMxLjI4MTQgMTEuMjc5OCAyOS4xMjE0IDEzLjUxOThaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMzMuMjgwNCAxOC41NTg4QzMyLjcyMDQgMTguNjM4OCAzMi4xNjA0IDE4LjMxODggMzIuMDAwNCAxNy42Nzg4QzMxLjkyMDQgMTcuMTE4OCAzMi4yNDA0IDE2LjU1ODggMzIuODgwNCAxNi4zOTg4QzMzLjQ0MDQgMTYuMzE4OCAzNC4wMDA0IDE2LjYzODggMzQuMTYwNCAxNy4yNzg4QzM0LjMyMDQgMTcuOTE4OCAzMy44NDA0IDE4LjM5ODggMzMuMjgwNCAxOC41NTg4WiIgZmlsbD0iYmxhY2siLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IHdpZHRoPSI0NC4xNiIgaGVpZ2h0PSI1NCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K" />
          <h2 className={styles.titleText}>Wisr Partner Portal</h2>
        </div>
        <label className={loginForm ? styles.label : styles.labelDelete}>
          Email
          <input className={styles.input} placeholder="Введите email"></input>
        </label>
        <label className={loginForm ? styles.label : styles.labelDelete}>
          Password
          <input className={styles.input} placeholder="Введите пароль"></input>
        </label>
        <div className={loginForm ? styles.buttons : styles.deleteButtons}>
          <div className={styles.loginButton}>Login</div>
          <div onClick={() => setLoginForm(false)} className={styles.loginButton}>
            Create account
          </div>
        </div>
      </div>
      <div className={loginForm ? styles.registerForm : styles.deleteRegisterForm}>
        <div className={loginForm ? styles.titleRegister : styles.titleRegisterDelete}>
          <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNTQiIHZpZXdCb3g9IjAgMCA0NSA1NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik00NC4xNTgxIDBDNDQuMTU4MSAwIDI2LjQ3ODEgMy40NCAyMi4wNzgxIDIzLjEyVjU0QzQyLjg3ODEgNDguOTYgNDQuMDc4MSAyNS4zNiA0NC4xNTgxIDIxLjZWMFoiIGZpbGw9IiMzMjNGNTEiLz4KPHBhdGggZD0iTTQ0LjE2IDBIMEMwIDAgMTcuNjggMy40NCAyMi4wOCAyMy4xMkMyNi40OCAzLjQ0IDQ0LjE2IDAgNDQuMTYgMFoiIGZpbGw9IiM2MkM0QkIiLz4KPHBhdGggZD0iTTIyLjA4IDIzLjEyQzE3LjY4IDMuNTIgMCAwIDAgMFYyMS41MkMwLjA4IDI1LjM2IDEuMjggNDguOTYgMjIuMDggNTMuOTJWMjMuMTJaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNNy4wMzkzOCAxMy41MTk4QzQuNzk5MzcgMTUuNzU5OCA0Ljc5OTM3IDE5LjI3OTggNy4wMzkzOCAyMS41MTk4QzkuMTk5MzggMjMuNzU5OCAxMi43OTk0IDIzLjc1OTggMTUuMDM5NCAyMS41MTk4QzE3LjI3OTQgMTkuMzU5OCAxNy4yNzk0IDE1Ljc1OTggMTUuMDM5NCAxMy41MTk4QzEyLjc5OTQgMTEuMjc5OCA5LjI3OTM4IDExLjI3OTggNy4wMzkzOCAxMy41MTk4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTExLjI4MDQgMTguNTU4OEMxMC43MjA0IDE4LjYzODggMTAuMTYwNCAxOC4zMTg4IDEwLjAwMDQgMTcuNjc4OEM5LjkyMDM2IDE3LjExODggMTAuMjQwNCAxNi41NTg4IDEwLjg4MDQgMTYuMzk4OEMxMS40NDA0IDE2LjMxODggMTIuMDAwNCAxNi42Mzg4IDEyLjE2MDQgMTcuMjc4OEMxMi4xNjA0IDE3LjgzODggMTEuODQwNCAxOC4zOTg4IDExLjI4MDQgMTguNTU4OFoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0yOS4xMjE0IDEzLjUxOThDMjYuODgxNCAxNS43NTk4IDI2Ljg4MTQgMTkuMjc5OCAyOS4xMjE0IDIxLjUxOThDMzEuMzYxNCAyMy43NTk4IDM0Ljg4MTQgMjMuNzU5OCAzNy4xMjE0IDIxLjUxOThDMzkuMzYxNCAxOS4zNTk4IDM5LjM2MTQgMTUuNzU5OCAzNy4xMjE0IDEzLjUxOThDMzQuODgxNCAxMS4yNzk4IDMxLjI4MTQgMTEuMjc5OCAyOS4xMjE0IDEzLjUxOThaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMzMuMjgwNCAxOC41NTg4QzMyLjcyMDQgMTguNjM4OCAzMi4xNjA0IDE4LjMxODggMzIuMDAwNCAxNy42Nzg4QzMxLjkyMDQgMTcuMTE4OCAzMi4yNDA0IDE2LjU1ODggMzIuODgwNCAxNi4zOTg4QzMzLjQ0MDQgMTYuMzE4OCAzNC4wMDA0IDE2LjYzODggMzQuMTYwNCAxNy4yNzg4QzM0LjMyMDQgMTcuOTE4OCAzMy44NDA0IDE4LjM5ODggMzMuMjgwNCAxOC41NTg4WiIgZmlsbD0iYmxhY2siLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IHdpZHRoPSI0NC4xNiIgaGVpZ2h0PSI1NCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K" />
          <h2 className={styles.titleText}>Wisr Partner Portal</h2>
        </div>
        <div className={loginForm ? "" : styles.labels}>
          <label className={loginForm ? styles.labelRegister : styles.labelRegisterDelete}>
            Name
            <input className={styles.input} placeholder="Введите имя"></input>
          </label>
          <label className={loginForm ? styles.labelRegister : styles.labelRegisterDelete}>
            Surname
            <input className={styles.input} placeholder="Введите фамилию"></input>
          </label>

          <label className={loginForm ? styles.labelRegister : styles.labelRegisterDelete}>
            Email
            <input className={styles.input} placeholder="Введите email"></input>
          </label>
          <label className={loginForm ? styles.labelRegister : styles.labelRegisterDelete}>
            Password
            <input className={styles.input} placeholder="Введите пароль"></input>
          </label>
        </div>
        <div className={loginForm ? styles.deleteButtonsRegister : styles.buttonsRegister}>
          <div onClick={() => setLoginForm(true)} className={styles.loginButton}>
            Back
          </div>
          <div className={styles.loginButton}>Regisration</div>
        </div>
      </div>
    </div>
  );
};

export default login;
