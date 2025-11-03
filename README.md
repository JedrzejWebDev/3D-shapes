🧩 Struktura projektu:  
src/components - znajdują się 3 pliki. Jeden z nich odpowiada za pole wyboru figury oraz jej rozmiar. Drugi za jej wyświetlanie. Trzeci jest nadrzędnym i wyświetla je  
src/index.css - zawiera style z użyciem tailwinda  
src/main.tsx - główny plik wyświetlający całą aplikację  
src/store.ts - użycie biblioteki zustand do zarządzania globalnym stanem aplikacji (kontrolowanie rodzaju figury i jej wielkości)  

🛠️ Technologie:  
react-three, tailwind, zustand

⚙️ Instalacja i uruchomienie:  
Przed przystąpieniem do wykonywania komend należy mieć zainstalowane git oraz node.js + npm  
git clone https://github.com/JedrzejWebDev/3D-shapes.git  
cd 3D-shapes  
npm install  
npm run dev  
