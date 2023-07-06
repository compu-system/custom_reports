// Copyright (c) 2016, Digital Box  and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Trade Creditors Analysis"] = {
		"filters": [
		{
			"fieldname":"company",
			"label": __("Company"),
			"fieldtype": "Link",
			"options": "Company",
			"reqd": 1,
			"default": frappe.defaults.get_user_default("Company")
		},
		{
			"fieldname":"report_date",
			"label": __("As on Date"),
			"fieldtype": "Date",
			"default": frappe.datetime.get_today()
		},
		{
			"fieldname":"finance_book",
			"label": __("Finance Book"),
			"fieldtype": "Link",
			"options": "Finance Book"
		},
		{
			"fieldname":"cost_center",
			"label": __("Cost Center"),
			"fieldtype": "Link",
			"options": "Cost Center",
			get_query: () => {
				var company = frappe.query_report.get_filter_value('company');
				return {
					filters: {
						'company': company
					}
				};
			}
		},
		{
			"fieldname":"supplier",
			"label": __("Supplier"),
			"fieldtype": "Link",
			"options": "Supplier",
			on_change: () => {
				var supplier = frappe.query_report.get_filter_value('supplier');
				if (supplier) {
					frappe.db.get_value('Supplier', supplier, "tax_id", function(value) {
						frappe.query_report.set_filter_value('tax_id', value["tax_id"]);
					});
				} else {
					frappe.query_report.set_filter_value('tax_id', "");
				}
			}
		},
		{
			"fieldname":"supplier_group",
			"label": __("Supplier Group"),
			"fieldtype": "Link",
			"options": "Supplier Group"
		},
		{
			"fieldname": "group_by_party",
			"label": __("Group By Supplier"),
			"fieldtype": "Check"
		}
	],

	"formatter": function(value, row, column, data, default_formatter) {
		value = default_formatter(value, row, column, data);
		if (data && data.bold) {
			value = value.bold();

		}
		return value;
	},

};

erpnext.utils.add_dimensions('Trade Creditors Analysis', 9);