import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router} from 'react-router-dom'

import Button from "./index";

test(" Ngetest Button diSabled is False ", () => {
    const {container} = render(<Button isDisabled></Button>)

    expect(container.querySelector("span.disabled")).toBeInTheDocument();
});


test(" Ngetest loading ", () => {
    const {container, getByText} = render(<Button isLoading></Button>)

    expect(getByText(/loading/i)).toBeInTheDocument();
    expect(container.querySelector("span")).toBeInTheDocument();
})

test(" Ngetest tag <a> ", () => {
    const {container} = render(<Button type="link" isExternal></Button>)

    expect(container.querySelector("a")).toBeInTheDocument();
});
test(" Ngetest <Link> ", () => {
    const {container} = render(
    <Router>
        <Button href="" type="link"></Button>
    </Router>)

    expect(container.querySelector("a")).toBeInTheDocument();
});