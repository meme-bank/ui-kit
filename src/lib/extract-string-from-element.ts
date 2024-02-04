import { isValidElement, ReactNode } from "react"

export function extractStringFromNode(reactNode: ReactNode): string {
  let string = ""
  if (typeof reactNode === "string") {
    string = reactNode
  } else if (typeof reactNode === "number") {
    string = reactNode.toString()
  } else if (reactNode instanceof Array) {
    reactNode.forEach(function (child) {
      string += extractStringFromNode(child)
    })
  } else if (isValidElement(reactNode)) {
    string += extractStringFromNode(reactNode.props.children)
  }
  return string
}