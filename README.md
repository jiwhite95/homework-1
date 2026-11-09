# Jiya White — Personal Portfolio

Welcome to my personal portfolio! I built this site to share a little bit about my life—balancing motherhood, school, and the everyday things I love—while putting my web design and accessibility skills into practice.

## Design Choices & Gestalt Principles

* **Color Palette:** I went with a warm pink-and-cream theme (`#ffeef3` background with `#c82333` and `#ff6f6f` accents) using CSS variables in `:root` so the whole site feels cozy, welcoming, and consistent across every page.
* **Proximity:** Inside my cards, I kept the spacing tight (`8px` and `16px`) so related headings and paragraphs clearly belong together, while leaving wider gaps between separate cards so the page never feels cluttered.
* **Similarity:** I styled all my cards, navigation links, and tags with matching rounded corners, fonts, and accent borders so visitors can easily tell how things are grouped and where they can click.

## Accessible Contact Form

You can find my contact form on the **About Me** page (`about.html`). I made sure it works smoothly for everyone, including people using keyboards or screen readers:

* Every input box has a matching `<label>` connected to it.
* The radio buttons for picking a contact reason are grouped inside a `<fieldset>` with a `<legend>`.
* If someone forgets to fill out a required box, clear error messages pop up using `aria-invalid` and `aria-live` so assistive tech reads them right away.

## How to View the Site

1. Open `index.html` in any web browser (or visit my live GitHub Pages link).
2. Use the top menu to click over to **About Me** (`about.html`) to check out the contact form.