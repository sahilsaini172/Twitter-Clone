export default function Icon({ type = "solid", icon = "add", style = "sm" }) {
  return <i className={`fa-${type} fa-${icon + " " + style}`}></i>;
}
