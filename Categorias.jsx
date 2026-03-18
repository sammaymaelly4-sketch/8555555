* { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --verde: #2D5A3D;
  --verde2: #1E3D2A;
  --verde3: #3D7A52;
  --laranja: #E8622A;
  --laranja2: #FF7A3D;
  --bege: #C4A882;
  --bege2: #F0E8D8;
  --cream: #FAF6EE;
  --txt: #1A2E1F;
  --muted: #6B8A72;
}

html, body, #root {
  height: 100%;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  background: var(--cream);
  font-family: 'Nunito', sans-serif;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

/* scrollbar clean */
::-webkit-scrollbar { width: 0; height: 0; }

/* animações globais */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes pop {
  from { transform: scale(0.8); opacity: 0; }
  to   { transform: scale(1);   opacity: 1; }
}
@keyframes spin {
  to { transform: rotate(360deg); }
}
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.5; }
}
