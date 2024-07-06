import Calculator from "./components/Calculator"
function App() {
  // This is the main React component, which is the top-most component
  // that contains all the other components.
  //
  // The return statement is returning a JSX expression, which is
  // a syntax extension for JavaScript that allows you to write HTML
  // like syntax directly in your JavaScript code.
  //
  // The JSX expression is creating a main HTML element, which is
  // the top-most element in the HTML document.
  //
  // The main element is being given a class name of "w-screen h-screen
  // flex justify-center items-center bg-gray-400", which is a
  // Tailwind CSS class that sets the width and height of the element
  // to the full screen, centers the element horizontally and
  // vertically, and sets the background color to a light gray.
  //
  // Inside the main element, the JSX expression is creating a
  // Calculator component, which is another React component that
  // is imported from the components/Calculator.jsx file.
  //
  // The Calculator component is being passed no props, which means
  // that it will render itself without any additional information.
  return (
    <main className="w-screen h-screen flex justify-center items-center bg-gray-400">
      <Calculator />
    </main>
    
  )
}

export default App
