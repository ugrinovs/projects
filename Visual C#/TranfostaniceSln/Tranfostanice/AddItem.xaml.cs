using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;

using static Tranfostanice.DataBaseConfig;

namespace Tranfostanice
{
	/// <summary>
	/// Interaction logic for AddItem.xaml
	/// </summary>
	public partial class AddItem : Window
	{
		public AddItem()
		{
			InitializeComponent();
		}

		DataBaseConfig dataBaseConfig = new DataBaseConfig();
		Dictionary<string, string> valueMap = new Dictionary<string, string>();
		private void buttonDodajTrafostanicu_Click(object sender, RoutedEventArgs e)
		{
			if (textBoxNazivTrafostanice.Text != null && textBoxBrojPrekidaca.Value != null)
			{
				string nazivTrafostanice = textBoxNazivTrafostanice.Text;
				int brojPrekidaca = (int)textBoxBrojPrekidaca.Value;
				int nazivGrada = int.Parse(valueMap[comboBoxIzaberiGrad.SelectedValue.ToString()]);
				string query = "INSERT INTO trafostanica(naziv_trafostanice, broj_transformatora, grad_id) values ('" + nazivTrafostanice + "', " + brojPrekidaca + ", " + nazivGrada + ")";

				dataBaseConfig.GetTable(query);
				Window addItemWindow = new AddItem();
				this.Close();
			}
		}

		private void comboBox_Initialized(object sender, EventArgs e)
		{
			string query = "SELECT * FROM grad";
			DataTable dt = dataBaseConfig.GetTable(query);
			valueMap.Clear();
			foreach (DataRow row in dt.Rows)
			{
				comboBoxIzaberiGrad.Items.Add(row.ItemArray[1].ToString());
				valueMap.Add(row.ItemArray[1].ToString(), row.ItemArray[0].ToString());
			}
			

		}
		private void comboBox_SelectionChanged(object sender, SelectionChangedEventArgs e)
		{
			string result = valueMap[comboBoxIzaberiGrad.SelectedValue.ToString()];
		}
	}
}
