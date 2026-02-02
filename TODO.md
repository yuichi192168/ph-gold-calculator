# TODO List for Vue.js Gold Rate Calculator App

## 1. Install Dependencies
- [x] Add Vue Router to package.json and install via npm

## 2. Set Up Routing
- [x] Create src/router/index.js with routing configuration for Home, Login, Register, Calculators
- [x] Update src/main.js to import and use Vue Router

## 3. Update App.vue
- [x] Replace content with router-view and add basic navigation menu

## 4. Create Views and Components
- [x] Create src/views/Home.vue (landing page)
- [x] Create src/components/Login.vue (user login form)
- [x] Create src/components/Register.vue (user registration form)
- [x] Create src/views/Calculators.vue (page to select calculators)
- [x] Create src/components/GoldCalculator.vue (gold price calculator component)

## 5. Implement Authentication Logic
- [x] Add localStorage-based user storage in Login and Register components
- [x] Add basic validation for forms

## 6. Implement Gold Calculator Logic
- [x] Add input fields for gold rate, grams, making charge
- [x] Implement calculation: Gold Cost = Rate × Grams, Tax = 12% of (Gold Cost + Making Charge), Final Price = Gold Cost + Making Charge + Tax
- [x] Display breakdown of costs

## 7. Testing and Styling
- [ ] Run the app and test all features
- [ ] Add basic CSS styling for responsiveness
- [ ] Ensure calculations are accurate
