import NormalizedStyles from '../src/utils/NormalizedStyles'

export const decorators = [
  Story => (
    <>
      <NormalizedStyles />
      <Story />
    </>
  )
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}