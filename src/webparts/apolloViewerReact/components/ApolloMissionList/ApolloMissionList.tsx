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
        <TagPicker
          pickerSuggestionsProps={{
            suggestionsHeaderText: "Suggested Apollo missions...",
            noResultsFoundText: "No matching Apollo missions found"
          }}
          onResolveSuggestions={this._onFilterChanged}
        />

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

  private _onFilterChanged = (
    filterText: string,
    tagList: { key: string; name: string }[]
  ): { key: string; name: string }[] => {
    // return object collection of missions with id and name.

    const filteredMissions: IMission[] = this.props.missions.filter(mission => {
      if (
        mission.id
          .toLocaleLowerCase()
          .indexOf(filterText.toLocaleLowerCase()) === 0 ||
        mission.name
          .toLocaleLowerCase()
          .indexOf(filterText.toLocaleLowerCase()) === 0
      ) {
        // if mission id and name are found in the filtered text.
        // return mission
        return mission; // collection.
      }
    });

    return filteredMissions.map(m => ({
      key: this._getMissionUniqueId(m),
      name: `(${m.id}) ${m.name}`
    }));
  };

  // get key unique id for each mission.
  private _getMissionUniqueId(mission: IMission): string {
    return `${mission.id}|${mission.name}`.toLocaleLowerCase();
  }
}
