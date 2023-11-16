export const linkByHref = (text: string) => `//a[contains(@href,'/${text}')]`;
export const byTagAndAttribute = (tag: string, attribute: string, text: string) => `//${tag}[@${attribute}="${text}"]`;
export const buttonByText = (text: string) => `(//button[contains(text(),"${text}")])[1]`;