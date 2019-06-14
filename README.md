# React FunctionComponent

``When NOT to use Functional Components

If functional components are a hammer, it’s important to remember that not every problem is a nail. Class components are included in React for a reason.

The general heuristic I use is to always start with a functional component. If you find out you need lifecycle methods or it makes sense to have a small piece component level state, it’s trivial to refactor to a class component. I find this style of writing components keeps me from getting lazy and forces me to use functional components to their full potential.

This post, “7 Reasons to Outlaw React’s Functional Components” also offers some additional potential downsides to consider. That said, I personally don’t find any of the arguments against functional components very compelling.

From the release notes:

“In idiomatic React code, most of the components you write will be stateless, simply composing other components.”

Companies on the cutting edge of React development like Facebook, Netflix, and Airbnb all readily use functional components.  It seems pretty clear the upsides outweigh the negatives.

When should you NOT use functional components? When you have no other option.``
from https://programmingwithmosh.com/react/react-functional-components/


Example code here :  https://fettblog.eu/typescript-react/hooks/#usestate
