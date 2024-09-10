# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# notes
By calling super(props), you ensure that the parent class (React.Component) performs its necessary initializations, allowing your component to function correctly within the React framework. This is crucial for accessing this.props and setting up the component’s initial state based on the props.

this.state.count=this.state.count+1;
never update state variable in react like this. it is wrong.


# lifecycle method in react
->first constructor is called than render is called than componentdidmount is called.

constructor_parent()->render_parent()->constructor_child()->render_child()->componentdidmount_child()->component_did_mount_parent()

-> component did mount is used to make API calls. 


if there is more than one children

parent_constructor->parent_render->child1_constructor()->child1->render()->child2_constructor()->child2_render()->child2_didmount()->child1_didmount->parent_didmount();


-> first constructor is called tgan render is called than react updates the dom than componentdidmount is called. 