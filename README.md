<h1 align="center">
    <a href="https://ibb.co/e2G9Sx">
        <img src="https://preview.ibb.co/cbfsfH/react_bulma_vitae_logo.png" alt="react_bulma_vitae_logo" border="0">
    </a>
    <br>
    React Bulma Vitae
</h1>

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Build a great looking personal resume in seconds with [JSON resumes](https://jsonresume.org/), [React](https://reactjs.org/) and the [Bulma css framework](https://bulma.io/).

React Bulma Vitae is a simple template for creating great looking resumes using the very simple to learn and user JSON Resume schemas. Using React and Bulma, simply pass your resume schema to the `Resume` component to see your resume take form in the basic template or create your own with easy to use helper components. 

The libary uses [Bloomer](https://bloomer.js.org) and [react-tippy](https://github.com/tvkhoa/react-tippy) under the hood to provide you with the most consistent and tested experience.

## Demo

When using the base `Resume` component, you will see your resume in this [template](https://minivera.github.io/react-bulma-vitae/).

## How to use
1. Install React Bulma Vitae
```
npm install react-bumla-vitae --save
```
2. Include the Bulma CSS somewhere in you page
> Install with npm `npm install bulma` or with the [CDN](https://cdnjs.com/libraries/bulma)
3. Create and validate your [resume's JSON schema](https://jsonresume.org/getting-started/) 
4. Import the Resume component and provide it with your schema
```javascript
import { Resume } from 'react-bulma-vitae';

const Example = (props) => {
    
    //Provide the valid schema created with the JSON resume's schema
    return (
        <Resume schema={props.schema}/>
    );
};
```

## Customize
The basic `Resume` component will provide you with a basic template to get you started, however, it is perfectly possible to customize the template.

If you provide children to the `Resume` component, it will render your own code rather than the base template. It will also provide you with Higher Order Components to subscribe to the schema's content.

### Helper Higher Order Components

* `withBasics`: Provide you the content of the basics section in the JSON schema through the `basics` prop. Also provides you with the `availableSections` prop which lists filled sections in the resume (This is likely to change).
* `withWork`: Provide you the content of the work section in the JSON schema through the `work` prop.
* `withVolunteer`: Provide you the content of the volunteer section in the JSON schema through the `volunteer` prop.
* `withEducation`: Provide you the content of the education section in the JSON schema through the `education` prop.
* `withAwards`: Provide you the content of the awards section in the JSON schema through the `awards` prop.
* `withPublications`: Provide you the content of the publications section in the JSON schema through the `publications` prop.
* `withSkills`: Provide you the content of the skills section in the JSON schema through the `skills` prop.
* `withLanguages`: Provide you the content of the languages section in the JSON schema through the `languages` prop.
* `withInterests`: Provide you the content of the interests section in the JSON schema through the `interests` prop.
* `withReferences`: Provide you the content of the references section in the JSON schema through the `references` prop.

Import them from the main package.

```javascript
import { withBasics } from 'react-bulma-vitae';
```

### Components
The library exposes all the components it uses internally to build the Resume. If you simply want to rearrange things, use these components.

Import them from the main package.

```javascript
import { BasicsSection } from 'react-bulma-vitae';
```

## TODO

- [ ] Create tests.
- [ ] Document components and create an example with Material Design.
- [ ] Separate the mobile Menu from the basics section and the `withBasics` HOC.
- [ ] Upgrade to React 16.3 new context API.
- [ ] Separate the theme from the rendering and offer Bloomer as a theme. Probably rebrand as `react-vitae`.

<div>Resume icon made by <a href="https://www.flaticon.com/authors/vectors-market" title="Vectors Market">Vectors Market</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
