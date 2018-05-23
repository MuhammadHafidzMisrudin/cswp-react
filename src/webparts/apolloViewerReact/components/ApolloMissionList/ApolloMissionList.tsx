import * as React from "react";

import { List } from "office-ui-fabric-react/lib/List";
import { TagPicker } from "office-ui-fabric-react/lib/components/pickers/TagPicker/TagPicker";
import { Toggle } from "office-ui-fabric-react/lib/Toggle";

import styles from "../ApolloViewerReact/ApolloViewerReact.module.scss";

import { IMission } from "../../../../models";
import {
  ApolloMission,
  IApolloMissionListProps,
  IApolloMissionListState
} from "../";

export class ApolloMissionList extends React.Component<
  IApolloMissionListProps,
  IApolloMissionListState
> {
  // this (child) component to return back a list of all different items.
  // build the list up and render a list of multiple Apollo Missions.

  constructor(props: IApolloMissionListProps) {
    super(props);

    // initialise the state
    this.state = {
      filteredMissions: [],
      showAllMissions: false
    };
  }

  public render(): React.ReactElement<IApolloMissionListProps> {
    return (
      <div>
        <Toggle
          label="Show all or filtered missions?"
          onText="Showing all missions"
          offText="Showing selected missions"
          checked={this.state.showAllMissions}
          onChanged={this.onPickerToggleChanged}
        />
        <TagPicker
          pickerSuggestionsProps={{
            suggestionsHeaderText: "Suggested Apollo missions...",
            noResultsFoundText: "No matching Apollo missions found",
            searchingText: "Searching Apollo missions..."
          }}
          onResolveSuggestions={this._onFilterChanged}
        />
        <List items={this.props.missions} onRenderCell={this._onRenderCell} />
      </div>
    );
  }

  private onPickerToggleChanged = (checked: boolean): void => {
    this.setState({ showAllMissions: checked });
  };

  // return object collection of missions with id and name.
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
        // return mission.
        return mission; // collection.
      }
    });

    return filteredMissions.map(m => ({
      key: this._getMissionUniqueId(m),
      name: `(${m.id}) ${m.name}`
    }));
  };

  // render a collection of missions items in the List cell.
  private _onRenderCell = (
    mission: IMission,
    index: number | undefined
  ): JSX.Element => {
    // render a collection of missions items in the List cell.
    return (
      <ApolloMission
        key={this._getMissionUniqueId(mission)}
        mission={mission}
        onRemoveMission={this.props.onDeleteMission}
      />
    );
  };

  // get key unique id for each mission.
  private _getMissionUniqueId(mission: IMission): string {
    return `${mission.id}|${mission.name}`.toLocaleLowerCase();
  }
}
