import * as React from "react";
import styles from "./ApolloViewerReact.module.scss";
import { IMission } from "../../../../models";
import { MissionService } from "../../../../services";
import {
  ApolloMissionList,
  IApolloViewerReactProps,
  IApolloViewerReactState
} from "../";
import { escape } from "@microsoft/sp-lodash-subset";

export class ApolloViewerReact extends React.Component<
  IApolloViewerReactProps,
  IApolloViewerReactState
> {
  // initialise the state what the default value should be.
  constructor(props: IApolloViewerReactProps) {
    super(props);
    this.state = {
      missions: []
    };
  }

  // add react lifecycle event.
  public componentDidMount(): void {
    this.setState({
      // define the state for application.
      missions: MissionService.getMissions() // get all missions.
    });
  }

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
              <ApolloMissionList
                missions={this.state.missions}
                onDeleteMission={this._removeMission}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  private _removeMission = (missionToRemove: IMission): void => {
    // create a new collection - array of Mission
    const newMissions: IMission[] = this.state.missions.filter(
      mission => mission !== missionToRemove
    );
    this.setState({ missions: newMissions });
  };
}
