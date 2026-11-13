import Phaser from "phaser";

export type SceneKey = "title" | "play" | "cutscene";

const transitioning = new WeakSet<Phaser.Scene>();

export function fadeTo(
  scene: Phaser.Scene,
  destination: SceneKey,
  data: object = {},
): void {
  if (transitioning.has(scene)) return;

  transitioning.add(scene);

  scene.cameras.main.fadeOut(450, 4, 2, 12);
  scene.cameras.main.once("camerafadeoutcomplete", () => {
    transitioning.delete(scene);
    scene.scene.start(destination, data);
  });
}
