# Personal Portfolio Website - Jiya White

## Project Overview
This project is a personal portfolio website designed to showcase my journey as a student and mother. It features a cohesive custom design system, structured layouts utilizing Gestalt principles, and an accessible contact form.

---

## Features & Requirements Met

### 1. Visual Design & Gestalt Principles
* **Consistent Color Palette:** Established a unified warm pink-and-cream design system utilizing CSS custom properties (`:root`) linked across all pages (`index.html` and `about.html`) to ensure uniform background shades, headers, borders, and text tones.
* **Proximity:** *'I used proximity to group my content cards and internal elements together with tight padding, while separating distinct layout sections with larger spacing so visitors can easily see which items relate to one another.'*
* **Similarity:** *'I used similarity across all navigation elements, tags, and card structures—applying consistent fonts, pink accent borders, and rounded corners—so users instantly recognize interactive components and visual themes across the site.'*

### 2. Accessible Contact Form
* Located on the **About & Contact** page (`about.html`).
* Includes explicit `<label>` elements connected via `for` and `id` attributes for every form field.
* Groups radio options cleanly using `<fieldset>` and `<legend>` elements.
* Implements accessible error states using `aria-invalid`, `aria-describedby`, and live screen-reader regions (`role="alert"` / `aria-live="polite"`) to ensure keyboard and assistive tech users receive clear feedback.

---

## How to View the Project
1. Download or clone this repository to your local machine.
2. Ensure you have the following files in the same folder:
   - `index.html` (Home Page)
   - `about.html` (About & Contact Page)
   - `style.css` (Stylesheet)
   - Your profile image (`IMG_5765.jpg`)
3. Double-click `index.html` to open it in any modern web browser (Chrome, Firefox, Safari, Edge).
