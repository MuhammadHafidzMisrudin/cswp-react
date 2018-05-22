import * as React from "react";
import styles from "../ApolloViewerReact/ApolloViewerReact.module.scss";

import { IMission } from "../../../../models";
import { ApolloMission, IApolloMissionListProps } from "../";

export class ApolloMissionList extends React.Component<
  IApolloMissionListProps,
  {}
> {
  // this component to return back a list of all different items.
  // build the list up and render a list of multiple Apollo Missions.
  public render(): React.ReactElement<IApolloMissionListProps> {
    return (
      <div>
        {this.props.missions.map(mission => (
          <ApolloMission mission={mission} />
        ))}
      </div>
    );
  }
}
