import style from './Footer.module.css';

const Footer = (props) => {
  const { creator } = props
  const currentYear = new Date().getFullYear()

  return (
    <footer className={ style.Footer }>
      <h4>React Básico - {currentYear} - {creator}</h4>
    </footer>
  )
};

export { Footer }; 