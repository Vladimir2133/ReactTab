import React, {Component} from "react";
//components
import FirstTab from "components/tabs/FirstTab";
import SecondTab from "components/tabs/SecondTab";
import ThirdTab from "components/tabs/ThirdTab";


export const tabNames = {
    FIRST: "FIRST",
    SECOND: "SECOND",
    THIRD: "THIRD"
}

export const tabs = [
    {title: "Tab one", tabIndex: tabNames.FIRST, tabContent: <FirstTab />},
    {title: "Tab two", tabIndex: tabNames.SECOND,tabContent: <SecondTab />},
    {title: "Tab three", tabIndex: tabNames.THIRD, tabContent: <ThirdTab />}
]
