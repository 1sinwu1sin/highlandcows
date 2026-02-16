# Kwon Do-hoo's Learning Coaching Homepage Blueprint

## Overview

A simple homepage introducing "권도후의 학습코칭" (Kwon Do-hoo's Learning Coaching). The page provides a brief overview of the coaching, contact information, and a call to action. It also features a dark mode toggle and a consultation application modal.

## Project Structure

- `index.html`: The main HTML file for the homepage.
- `style.css`: The CSS file for styling the homepage.
- `main.js`: JavaScript file for interactivity (modal and dark mode).
- `blueprint.md`: This file, documenting the project.

## Current Plan

### Features to Implement
- **Consultation Modal:**
  - A modal form triggered by the "지금 상담 신청하기" button.
  - Inputs: Student's Name, Phone Number, School Name.
  - A "확인" button that shows a success message ("성공적으로 신청되었습니다") and closes the modal.
- **Dark/Light Mode Toggle:**
  - A UI switch to toggle between light and dark themes.
  - The user's preference should be saved in `localStorage`.

### Implementation Steps
1.  **HTML:** Add the structure for the modal and the dark mode toggle switch.
2.  **CSS:** Style the modal and create the dark theme using CSS variables.
3.  **JavaScript:** Implement the logic for showing/hiding the modal and handling the form submission. Implement the theme-switching logic.
4.  **Git:** Commit and push the new features.
