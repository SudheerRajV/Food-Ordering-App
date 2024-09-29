# Food-Ordering-App

# React - Hooks
- UseState() - Whenever a state variable updates React re-renders the components
- UseEffect() - To perform side effects of functional components, Such as fetching data, subscribing to external events

# Virtual DOM
- Its representation of actual DOM.

# Reconciliataion algo/Diff algo/ReactFibre
- Introduced in React 16
- Whenever react finds any change in the state variable, React finds out the change in    
   the virtual DOM and rerenders or update the DOM.

# React Hooks
   ## useEffect 
   - If dependency array is not specified then useEffect is rendered on very update. 
   - If dependency array is specified and its empty then useEffect is rendered only initially(just once).
   - If dependency array is specified and its not empty then useEffect is rendered on very state change of that variable.

# Routing 
   - There are 2 types of routing server side routing(through network call load new page) and client side route(uses react-dom link to replace components)
