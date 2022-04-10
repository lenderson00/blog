import React from 'react'

type CodeParams = { language: string }

const Code: React.FC<CodeParams> = ({ language, children }) => {
  return (
    <div className={`language-${language}`}>
      {children}
    </div>
  )
}

export default Code
