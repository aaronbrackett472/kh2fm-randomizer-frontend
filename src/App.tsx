import { BackTop, Layout } from "antd";
import "antd/dist/antd.css";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { About } from "./components/About";
import { Ads } from "./components/Ads/Ads";
import { Changelog } from "./components/Changelog";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Seed } from "./components/Seed";
import { Support } from "./components/Support";
import { SeedContextProvider } from "./context/seed";

function App() {
	return (
		<>
			<Layout>
				<Header />

				<Layout.Content style={{ padding: 24 }}>
					<Ads
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							marginBottom: 24,
						}}
						format="auto"
						responsive="true"
					/>

					<Switch>
						<Route
							path="/seed/:seed?"
							render={props => (
								<SeedContextProvider>
									<Seed {...props} />
								</SeedContextProvider>
							)}
							exact
						/>
						<Route path="/about" component={About} exact />
						<Route path="/changelog" component={Changelog} exact />
						<Route path="/support" component={Support} exact />
						<Redirect to="/seed" />
					</Switch>

					<Ads
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							marginTop: 24,
						}}
						format="auto"
						responsive="true"
					/>
				</Layout.Content>

				<Footer />
			</Layout>

			<BackTop />
		</>
	);
}

export default App;
