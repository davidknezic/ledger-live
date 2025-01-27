import { getMainAccount } from "../account";
import { getAccountBridge } from "../bridge";
import type { Account, AccountLike } from "@ledgerhq/types-live";

import {
  shouldShowNewAccount,
  getReceiveFlowError,
  canBeMigrated,
  findAccountMigration,
  checkAccountSupported,
} from "@ledgerhq/coin-framework/account/support";

export {
  shouldShowNewAccount,
  getReceiveFlowError,
  canBeMigrated,
  findAccountMigration,
  checkAccountSupported,
};

export function canSend(
  account: AccountLike,
  parentAccount: Account | null | undefined
): boolean {
  try {
    getAccountBridge(account, parentAccount).createTransaction(
      getMainAccount(account, parentAccount)
    );
    return true;
  } catch (e) {
    return false;
  }
}
