# SCOIR Technical Interview for Front-End Engineers

This repo contains an exercise intended for Front-End Engineers.

## Instructions

1. Click "Use this template" to create a copy of this repository in your personal github account.
1. Using technology of your choice, complete [the assignment](./Assignment.md).
1. Update this README with
   - a `How-To` section containing any instructions needed to run/access your system.
   - an `Assumptions` section containing documentation on any assumptions made while interpreting the requirements.
1. Send an email with a link to your newly created repo containing the completed exercise.

## Expectations

1. This exercise is meant to drive a conversation.
1. Please invest only enough time needed to demonstrate your approach to problem solving, code design, etc.
1. Within reason, treat your solution as if it would become a production system.

## Assumptions

- npm packages are ok to use
- No support for IE
- Rely on the api for breed name and accept data inconsistencies

## How-To

- Clone the repo and cd into "dog-breeds-byler-nuxt"
  - npm install
  - npm run dev
  - npm run test
- "dog-breeds-byler-nuxt" contains the dog breeds application
- "dog-breeds-byler-nuxt" contains a README with further instructions on how to run the nuxt app

### Planning

1. app config
2. page layout and base components (loading, dog card, buttons, input)
3. random dog button functionality, add/remove one card, dog store, clear all
4. type ahead widget (third party)
5. UI cleanup and refactor
6. custom type ahead widget (ran out of time)

### Discussion

##### Tests

- In my conversation with Paul Johnson we talked about 100% test coverage at Scoir.
- Since I do not have much experience with tests I took a stab at providing test coverage using Jest
- My tests seem a little "light". They confirm that the component is loading.
  - I added a few conditionals to init computed methods based on test fails
  - So even the "light" tests helped me make the code more robust
- How would you expand test coverage?
- How do you determine "good" test coverage?
- I'm interested to learn more about your approach to testing methodology.

##### Data Inconsistancy

- The dog api returns some inconsistant data: "Bulldog English" vs"Austrailian Sheppard", and in at least one instance "germansheppard"
- For the "germansheppard" instance I found resource:
  - https://github.com/parsakafi/wordsninja
  - The resource needs modified to not use "fs" to read files and so will not run in the browser
  - I'm 90% I could modify the resource to work in this case given the time
