import * as React from "react";
import styles from "./ApolloViewerReact.module.scss";
import { IMission } from "../../../../models";
import { ApolloMission, IApolloViewerReactProps } from "../";
import { escape } from "@microsoft/sp-lodash-subset";

export class ApolloViewerReact extends React.Component<
  IApolloViewerReactProps,
  {}
> {
  private _mission: IMission = {
    id: "AS-502",
    name: "Apollo 6",
    launch_date: "04/04/1968",
    end_date: "",
    image: "",
    wiki_href: "https://en.wikipedia.org/wiki/Apollo_6",
    summary:
      "Unmanned, attempted demonstration of trans-lunar injection, and direct-return abort using SM engine; three engine failures, including failure of S-IVB restart. Flight controllers used SM engine to repeat Apollo 4's flight profile. Man-rated the Saturn V.",
    crew: []
  };

  public render(): React.ReactElement<IApolloViewerReactProps> {
    // container component - ApolloViewerReact component will be rendered out by parent container component.
    // and loading a child component - ApolloMission.
    return (
      <div className={styles.apolloViewerReact}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>
                Welcome to the Apollo Mission View React!
              </span>
              <ApolloMission mission={this._mission} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
