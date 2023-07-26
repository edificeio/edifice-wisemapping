import DefaultWidgetManager from '../../classes/default-widget-manager';

export const useWidgetManager = (): [
  boolean,
  (arg: boolean) => void,
  Element,
  DefaultWidgetManager,
] => {
  const [popoverOpen, setPopoverOpen, popoverTarget, widgetManager] =
    DefaultWidgetManager.useCreate();

  return [popoverOpen, setPopoverOpen, popoverTarget, widgetManager];
};
