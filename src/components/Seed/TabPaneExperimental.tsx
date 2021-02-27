import { bosses, Experimental } from "@valaxor/kh2fm-randomizer";
import { Divider, Typography } from "antd";
import React, { useContext } from "react";
import { SeedContext } from "../../context/seed";
import { useValueMapper } from "../../hooks/useValueMapper";
import { SettingSlider, SettingSliderProps } from "./SettingSlider";

interface Setting extends SettingSliderProps {
	key: keyof Experimental;
}

export const experimentalSettings: Setting[] = [
	{
		key: "bosses",
		title: "Randomize Bosses",
	},
	{
		key: "superbossRetry",
		help:
			"After dying, hold L2+R2+Select while pressing on Continue to load back into the fight",
		title: "Retry on Superbosses",
	},
];

export const TabPaneExperimental: React.FC = () => {
	const { experimental } = useContext(SeedContext);

	const mapValue = useValueMapper<Experimental, number>(experimental);

	return (
		<div>
			<p>Thank you for testing the experimental features!</p>

			<p>
				Note that these features are still in development, they could be
				unstable and you may run into problems. They may also drastically change
				at any point.
			</p>

			<p>
				If you encounter bugs or problems please provide feedback about them,
				feel free to{" "}
				<Typography.Link href="https://twitter.valaxor.com" target="_blank">
					tweet at me
				</Typography.Link>{" "}
				or{" "}
				<Typography.Link href="https://discord.gg/GcJR7Fv" target="_blank">
					join the Rando Discord server
				</Typography.Link>
				.
			</p>

			<Divider />

			<div className="tab-pane">
				{experimentalSettings.map(({ title, key, ...props }) => (
					<SettingSlider
						title={title}
						{...mapValue(key)}
						key={key}
						{...props}
					/>
				))}
			</div>

			<Divider />

			<div>
				<Typography>Current boss fights in the pool:</Typography>

				<ul>
					{bosses.map(boss => (
						<li key={boss.description}>{boss.description}</li>
					))}
				</ul>
			</div>
		</div>
	);
};
