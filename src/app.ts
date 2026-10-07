const root = document.body;

const heading = document.createElement('h1');
heading.textContent = 'TypeScript Zone';
root.appendChild(heading);

const note = document.createElement('p');
note.textContent =
  'Learning workspace root. Course examples and mini-projects live under Understanding-Ts/.';
root.appendChild(note);

const links = document.createElement('ul');
const projects = [
  { label: 'SearchAddress', href: './Understanding-Ts/SearchAddress/' },
  { label: 'React Todo', href: './Understanding-Ts/React/my-app/' },
  { label: 'Node + Express API', href: './Understanding-Ts/Node-Express-TypeScript/' },
];

for (const project of projects) {
  const item = document.createElement('li');
  item.textContent = project.label;
  links.appendChild(item);
}

root.appendChild(links);

console.log('TypeScript Zone ready. See README.md for how to run each project.');
