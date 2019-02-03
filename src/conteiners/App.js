//Components
import React, {Component} from "react";
//constants
import {tabNames, tabs} from "constants/tabs";
//style
import {Tabs, ButtonStyle, TabContent} from "style/components/style";


class App extends React.Component{
  state = {
    activTab: tabNames.FIRST
  };

  handleClick = (tabValue) => () => {
        this.setState({
            activeTab: tabValue
        });
    }

    render() {
            const {activeTab} = this.state;
            return (
                <div>
                    <Tabs>
                        {tabs.map(({title, tabIndex}, id) => (
                            <ButtonStyle key={id} onClick={this.handleClick(tabIndex)}>
                                {title}
                            </ButtonStyle>
                        ))}
                    </Tabs>
                    <TabContent>
                        {tabs.map(ind => (
                            <span key={ind.tabIndex}>
                              {ind.tabIndex === this.state.activeTab && ind.tabContent}
                            </span>
                        ))}
                      </TabContent>
                </div>

            );
        }
    }
export default App;
