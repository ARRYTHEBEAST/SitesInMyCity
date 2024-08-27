# Contributing to Sites In My City

Thank you for your interest in contributing to Sites In My City! We welcome contributions from everyone who wants to help improve this repository of historical and scenic places.

## Design Philosophy

Our website aims to capture the original flavor of the locations while remaining accessible and beautiful. The design should:

- Resemble Google Maps in terms of user interface and functionality
- Be intuitive and easy to navigate
- Showcase the historical and scenic places in an attractive manner
- Maintain a clean, modern look that doesn't overshadow the content

When contributing, please keep this design philosophy in mind to ensure consistency across the site.

## How to Contribute

1. **Fork the Repository:**
   - Click the "Fork" button at the top right of this repository's page. This creates a copy of the repository under your GitHub account.

2. **Clone the Repository:**
   - Use the following command to clone the repository to your local machine:
     ```
     git clone https://github.com/arrythebeast/sitesinmycity.git
     ```

3. **Create a New Branch:**
   - Create a new branch for your changes:
     ```
     git checkout -b feature/your-feature-name
     ```

4. **Make Your Changes:**
   - Add new sites to the `markersData` array in `kolhapurScript.js`.
   - Improve existing content or fix bugs.
   - Ensure your changes follow the project's coding style and guidelines.
   - Adhere to the design philosophy when making UI/UX changes.

5. **Adding a New Site(Location):**
   - To add a new site, append an object to the `markersData` array in `kolhapurScript.js`:
     ```javascript
     {
         coords: [latitude, longitude],
         name: "Site Name",
         data: "Description of the site",
         categories: ['Category1', 'Category2']
     },
     ```

6. **Test Your Changes:**
   - Open `kolhapurIndex.html` in a web browser to ensure your changes work as expected.
   - Test on both desktop and mobile views.
   - Verify that the design remains consistent with the overall aesthetic.

7. **Commit Your Changes:**
   - Stage and commit your changes:
     ```
     git add .
     git commit -m "Add a descriptive commit message"
     ```

8. **Push to Your Fork:**
   - Push your changes to your forked repository:
     ```
     git push origin feature/your-feature-name
     ```

9. **Create a Pull Request:**
   - Go to the original repository on GitHub.
   - Click on "Pull requests" and then the "New pull request" button.
   - Select your fork and the branch containing your changes.
   - Provide a clear title and description for your pull request.
   - Submit the pull request for review.

## Style Guidelines

- Use consistent indentation (spaces or tabs) throughout the code.
- Follow JavaScript ES6+ conventions where possible.
- Keep CSS classes meaningful and consistent with the existing naming conventions.
- Ensure all new features are responsive and work on both desktop and mobile views.
- Maintain the Google Maps-inspired design aesthetic.

## Design Considerations

- Use a color scheme that complements the map and doesn't distract from the content.
- Ensure that overlays and popups are easily readable and don't obstruct important map elements.
- Implement smooth transitions and animations for a polished user experience.
- Optimize for both touch and mouse interactions.

## Reporting Issues

If you find a bug or have a suggestion for improvement:

1. Check if the issue already exists in the GitHub issue tracker.
2. If not, create a new issue, providing as much detail as possible.

## Questions?

If you have any questions about contributing or the design direction, feel free to open an issue for discussion.

Thank you for contributing to Sites In My City and helping us showcase the beauty and history of our locations!
