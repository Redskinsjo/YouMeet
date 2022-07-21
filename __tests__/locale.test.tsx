import { render } from '@testing-library/react'
import { jest } from '@jest/globals'
import { I18nextProvider } from 'react-i18next'

import Locale from '../components/locale'
import i18n from '../public/locales'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: any) => key,
    i18n: {
      changeLanguage: () => new Promise(() => {})
    }
  })
}))

test('should render locale button', () => {
  const { container } = render(
    <I18nextProvider i18n={i18n}>
      <Locale />
    </I18nextProvider>
  )
  const button = container.querySelector('button') as HTMLButtonElement
  expect(button).toBeInTheDocument()
})
