# Copyright (c) 2013, Digital Box  and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from custom_reports.custom_reports.report.trade_debtors_analysis.trade_debtors_analysis import TradeDebtors

def execute(filters=None):
	args = {
		"party_type": "Supplier",
		"naming_by": ["Buying Settings", "supp_master_name"],
	}
	return TradeDebtors(filters).run(args)