import type { ActionResult } from '../../../agent/views';
import type { BrowserContext } from '../../../browser/context';
import { ActionModel } from '../views';

export class NavigateAction extends ActionModel {
  constructor(public url: string) {
    super();
  }

  static getName(): string {
    return 'go_to_url';
  }

  static getPromptDescription(): string {
    return `go_to_url: Navigate to a URL
Parameters:
  - url: URL to navigate to
Example:
  {"go_to_url": {"url": "https://example.com"}}`;
  }

  getIndex(): number | undefined {
    return undefined;
  }

  setIndex(_index: number): void {
    // No-op
  }

  static async execute(
    action: NavigateAction,
    browserContext: BrowserContext
  ): Promise<ActionResult> {
    try {
      await browserContext.navigateTo(action.url);
      return {};
    } catch (error) {
      return { error: error instanceof Error ? error.message : String(error) };
    }
  }
}