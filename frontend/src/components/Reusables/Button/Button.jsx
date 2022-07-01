import './Button.module.css'

export default function Button(props) {
  return (
    <button type='submit'>{props.label}</button>
  )
}
