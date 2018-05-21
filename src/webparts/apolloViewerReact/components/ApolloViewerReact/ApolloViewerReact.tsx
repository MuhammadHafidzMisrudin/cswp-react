import * as React from "react";
import styles from "./ApolloViewerReact.module.scss";
import { IApolloViewerReactProps } from "./IApolloViewerReactProps";
import { escape } from "@microsoft/sp-lodash-subset";

export class ApolloViewerReact extends React.Component<
  IApolloViewerReactProps,
  {}
> {
  public render(): React.ReactElement<IApolloViewerReactProps> {
    return (
      <div className={styles.apolloViewerReact}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>
                Welcome to the Apollo Mission View React!
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
