@@ -0,0 +1,66 @@
# Responsive Webpage
This project is a responsive webpage featuring a fixed navbar, collapsible left menu, main content area, right-side panel, and footer. The design ensures a user-friendly experience across different screen sizes, utilizing CSS media queries and JavaScript for functionality.
## Features
1. **Fixed Navbar**: The navbar remains at the top of the page while scrolling.
2. **Three Main Sections**:
   - **Left Menu**: Collapsible menu with a smooth transition effect.
   - **Main Content Area**: Central section for primary content.
   - **Right Panel**: Additional content or sidebar.
3. **Footer**: Fixed footer at the bottom of the page.
4. **Responsive Design**:
   - Adjusts zoom levels based on screen width for optimal viewing.
   - Collapsible and adaptive left menu for smaller screens.
5. **JavaScript Functionality**:
   - Toggles the left menu visibility.
   - Dynamically adjusts the page size based on screen width.
## Technologies Used
- **HTML5**: Structuring the webpage.
- **CSS3**: Styling and responsive design using media queries.
- **JavaScript**: Adding interactivity and dynamic behavior.
## Installation and Usage
1. Clone the repository or download the source code.
2. Open the `index.html` file in any modern web browser.
3. Resize the browser window to see the responsive design in action.
4. Use the toggle button in the header to show or hide the left menu.
## Code Overview
### HTML Structure
- The page is divided into:
  - A fixed `navbar`.
  - A `container` with three sections: `left-menu`, `main-content`, and `right-panel`.
  - A `footer` at the bottom.
### CSS Styling
- The `navbar` and `footer` have consistent styles for a professional look.
- Media queries adjust the `zoom` level and hide/show elements based on screen width.
- Transitions and animations ensure smooth toggling of the left menu.
### JavaScript Functionality
- `toggleBtn` toggles the visibility of the `left-menu` by adding/removing the `collapsed` class.
- `adjustPageSize()` adjusts the zoom level based on the screen width.
- Event listeners ensure the page adjusts dynamically on window resize.
## Responsive Behavior
1. **Screen Width 992px to 1600px**: Shrinks the page to 90%.
2. **Screen Width 700px to 767px**: Shrinks the page to 80%.
3. **Screen Width 600px to 700px**: Shrinks the page to 75%.
4. **Screen Width 600px or Less**:
   - Shrinks the page to 50%.
   - Hides the right panel for better usability on smaller screens.
## Preview
A fully functional and responsive webpage with user-friendly features, designed to adapt to various screen sizes and enhance user interaction.
---
For any issues or suggestions, feel free to contact me. Happy browsing!
