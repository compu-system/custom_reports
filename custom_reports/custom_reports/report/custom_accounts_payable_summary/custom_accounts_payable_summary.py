# Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
# License: GNU General Public License v3. See license.txt

from __future__ import unicode_literals
import frappe
from custom_reports.custom_reports.report.custom_accounts_receivable_summary.custom_accounts_receivable_summary \
	import CustomAccountsReceivableSummary

def execute(filters=None):
	args = {
		"party_type": "Supplier",
		"naming_by": ["Buying Settings", "supp_master_name"],
	}
	return CustomAccountsReceivableSummary(filters).run(args)

