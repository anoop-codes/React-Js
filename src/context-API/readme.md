## context API
: context provide a way to pass data through the component tree without having to passing through every level manually
: prevent props dilling basiclly

step:
create a context => react.createContext

createContext varibale will have the provide and consumer property

    <provider value={data}>
        <compoents>
        </.......>
    </provider>

    <consumer>
        {
            it is a function , which has data as argument
            (data) =>{
                return < a proper jsx>
            }
        }
    </consumer>