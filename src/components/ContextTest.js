import React, { Component, useContext, Fragment } from 'react';

// Theme context, default to light theme
const ThemeContext = React.createContext('light');

// Signed-in user context
const UserContext = React.createContext({
  name: 'Guest',
});

const NoProviderContext = React.createContext('i have no provider');

export default class ContextTest extends Component {
	render() {
		return (
      <ThemeContext.Provider value="dark">
        <UserContext.Provider value={{name: 'Josh'}}>
          <Layout />
        </UserContext.Provider>
      </ThemeContext.Provider>
		);
	}
}


function Layout() {
  return (
    <div>
      <Content />
      <ContentHook />
      <ContentContextType/>
    </div>
  );
}

// use consumer to get context
function Content() {
  return (
  	<NoProviderContext.Consumer>
  		{noProvider => (
		    <ThemeContext.Consumer>
		      {theme => (
		        <UserContext.Consumer>
		          {user => (
		            <ProfilePage user={user} theme={theme} noProvider={noProvider}/>
		          )}
		        </UserContext.Consumer>
		      )}
		    </ThemeContext.Consumer>
	  	)}
		</NoProviderContext.Consumer>	    
  );
}


// use hooks to get context
const ContentHook = () => {
	const theme = useContext(ThemeContext)
	const user = useContext(UserContext)

	return (
		<Fragment>
			<h1>
				get context by useContext Hooks (no need Consumer)
			</h1>
			<div>
				themeContext = {theme}
			</div>
			<div>
				userContext = {user.name}
			</div>
		</Fragment>
	)
}


export class ContentContextType extends Component {
	render() {

		return (
			<Fragment>
				<h1>
					Use contextType to get context
					if you want to use contextType to get multiple context,
						we need to have the new context which combine multiple context
					see:
					https://stackoverflow.com/questions/53988193/how-to-get-multiple-static-contexts-in-new-context-api-in-react-v16-6
				</h1>
				<div>
					themeContext = {this.context}
				</div>
			</Fragment>
		);
	}
}

ContentContextType.contextType = ThemeContext


const ProfilePage = ({user, theme, noProvider}) => {
	return (
		<div>
			<div>
				user = {user.name}
			</div>
			<div>
				theme = {theme}
			</div>
			<div>
				noProvider= {noProvider}
			</div>
		</div>
	)
}
