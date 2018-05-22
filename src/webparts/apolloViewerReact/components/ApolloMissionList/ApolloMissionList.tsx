import * as React from "react";

import { TagPicker } from "office-ui-fabric-react/lib/components/pickers/TagPicker/TagPicker";

import styles from "../ApolloViewerReact/ApolloViewerReact.module.scss";

import { IMission } from "../../../../models";
import { ApolloMission, IApolloMissionListProps } from "../";

export class ApolloMissionList extends React.Component<
  IApolloMissionListProps,
  {}
> {
  // this (child) component to return back a list of all different items.
  // build the list up and render a list of multiple Apollo Missions.
  public render(): React.ReactElement<IApolloMissionListProps> {
    return (
      <div>
        <TagPicker onResolveSuggestions={this._onFilterChange} />

        {this.props.missions.map(mission => (
          <ApolloMission
            key={this._getMissionUniqueId(mission)}
            mission={mission}
            onRemoveMission={this.props.onDeleteMission}
          />
        ))}
      </div>
    );
  }

  private _onFilterChange = (
    filterText: string,
    tagList: { key: string; name: string }[]
  ): { key: string; name: string }[] => {
    return [
      { key: "first-key", name: "first-name" },
      { key: "second-key", name: "second-name" }
    ];
  };

  // get key unique id for each mission.
  private _getMissionUniqueId(mission: IMission): string {
    return `${mission.id}|${mission.name}`.toLocaleLowerCase();
  }
}
