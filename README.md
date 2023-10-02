# React vitae
![GitHub](https://img.shields.io/github/license/minivera/react-vitae.svg)
![GitHub stars](https://img.shields.io/github/stars/minivera/react-vitae.svg?style=social)
[![Build Status](https://travis-ci.com/Minivera/react-vitae.svg?branch=master)](https://travis-ci.com/Minivera/react-vitae)
[![codecov](https://codecov.io/gh/Minivera/react-vitae/graph/badge.svg?token=QnUMjBaLK3)](https://codecov.io/gh/Minivera/react-vitae)

`react-vitae` is a set of strongly typed and battle tested React components and hooks that enable you to connect a [json-resume](https://github.com/jsonresume/resume-schema) schema to your components and build great looking resumes from a standardized schema. 

## Installation

You can install `react-vitae` with NPM or Yarn.

`npm install --save react-vitae` or `yarn add react-vitae`

## Usage

The main `react-vitae` package includes the [TypeScript types](src/types.ts) for the standard JSON resume schema and a set of components.

### Writing the resume file

The JSON resume repo provides all the tools to create and validate your resume file.

If using TypeScript, you can use the type suggestion and auto-completion feature of your IDE to create the schema using the provided types.

```typescript
import { Resume } from 'react-vitae';

const resume: Resume = {};
```

### The resume provider

The components need the resume file to be provided at the root of your application, if you have used `redux` or `react-router` before, this pattern should be familiar.

```jsx
import { ResumeProvider } from 'react-vitae';

const resume = {};

export const App = () => (
    <ResumeProvider resume={resume}>
        {/* Your application goes here */}
    </ResumeProvider>
);
```

### Using hooks

The package exports a set of custom hooks to retrieve the resume or part of it.

- `useResume` retrieves the main [resume](src/types.ts#L232).
- `useBasic` retrieves the [basic resume information](src/types.ts#L29).
- `useWork` retrieves the [work experiences](src/types.ts#L58).
- `useVolunteer` retrieves the [volunteer experiences](src/types.ts#L87).
- `useEducation` retrieves the [education information](src/types.ts#L110).
- `useAwards` retrieves the [list of awards](src/types.ts#L133).
- `usePublications` retrieves the [list of publications](src/types.ts#L147).
- `useSkills` retrieves the [list of skills](src/types.ts#L164).
- `useLanguages` retrieves the [list of languages](src/types.ts#L175).
- `useInterests` retrieves the [list of interests](src/types.ts#L183).
- `useReferences` retrieves the [list of professional references](src/types.ts#L191).
- `useProjects` retrieves the [list of projects](src/types.ts#L200).

All have the same signature: `useElement(): type` and return type specific type they represent.

### Using Higher-Order components

The package exports a set of hocs to retrieve the resume or part of it and inject them in an augmented component.

- `withResume` retrieves the main [resume](src/types.ts#L232).
- `withBasic` retrieves the [basic resume information](src/types.ts#L29).
- `withWork` retrieves the [work experiences](src/types.ts#L58).
- `withVolunteer` retrieves the [volunteer experiences](src/types.ts#L87).
- `withEducation` retrieves the [education information](src/types.ts#L110).
- `withAwards` retrieves the [list of awards](src/types.ts#L133).
- `withPublications` retrieves the [list of publications](src/types.ts#L147).
- `withSkills` retrieves the [list of skills](src/types.ts#L164).
- `withLanguages` retrieves the [list of languages](src/types.ts#L175).
- `withInterests` retrieves the [list of interests](src/types.ts#L183).
- `withReferences` retrieves the [list of professional references](src/types.ts#L191).
- `withProjects` retrieves the [list of projects](src/types.ts#L200).

All hocs will add a new prop to the augmented component named after the type in lowercase, for example.

```jsx harmony
import { withResume } from 'react-vitae';

const Component = ({ resume }) => { 
    // ...
};

export default withResume(Component);
```

### Using render props

The package exports a set of components to retrieve the resume or part of it and use them with the render prop pattern.

- `WithResume` retrieves the main [resume](src/types.ts#L232).
- `WithBasic` retrieves the [basic resume information](src/types.ts#L29).
- `WithWork` retrieves the [work experiences](src/types.ts#L58).
- `WithVolunteer` retrieves the [volunteer experiences](src/types.ts#L87).
- `WithEducation` retrieves the [education information](src/types.ts#L110).
- `WithAwards` retrieves the [list of awards](src/types.ts#L133).
- `WithPublications` retrieves the [list of publications](src/types.ts#L147).
- `WithSkills` retrieves the [list of skills](src/types.ts#L164).
- `WithLanguages` retrieves the [list of languages](src/types.ts#L175).
- `WithInterests` retrieves the [list of interests](src/types.ts#L183).
- `WithReferences` retrieves the [list of professional references](src/types.ts#L191).
- `WithProjects` retrieves the [list of projects](src/types.ts#L200).

They will all execute the render prop function with an object containing the resume element named after the retreived type in lowercase, for example.

```jsx harmony
import { WithResume } from 'react-vitae';

export const Component = () => (
    <WithResume>
        {({ resume }) => {
            // ...
        }}
    </WithResume>
);
```

## Themes

React-Vitae previously included two ready made themes to quickly create resumes with. These themes are deprecated and are only kept for reference.

See each theme's readme for instruction on usage and how to install them.

* [react-vitae-bulma-theme](/themes/react-vitae-bulma-theme)
* [react-vitae-material-theme](/themes/react-vitae-material-theme)

### Help needed

Any Pull Request will be reviewed and merged if it looks good, all help is appreciated!

## Development

### Installing the dependencies

Running `npm install` in the project's root directory will install everything you need for development.

### Running Lint

`npm lint` will run eslint in all packages at once.

### Running Tests

`npm test` will run the tests in all packages at once.

### Publishing

Publishing is done manually at the moment using the `npm publish` command.
