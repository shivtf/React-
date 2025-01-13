Hello

# Prop drilling 
making a global variable to give context 

# redux, react-redux , redux tool kit(rtk)
state management means pass the data in organize way

# to access the global context we use provider by putting it between fragments and pass the valriable name in it for eg

const userContext = React.createContext()

then 

<userContext>
<login/>
<dashboard/>
<card/>
</userContext>

now the it have the access of the global variable