using System;
using System.Collections.Generic;
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
using System.Windows.Navigation;
using System.Windows.Shapes;

using System.Data;
using MySql.Data;
using MySql.Data.MySqlClient;

using static Tranfostanice.DataBaseConfig;
using System.Collections.ObjectModel;

namespace Tranfostanice
{
	/// <summary>
	/// Interaction logic for MainWindow.xaml
	/// </summary>
	public partial class MainWindow : Window
	{
		public MainWindow()
		{
			InitializeComponent();
		}

		private DataBaseConfig dataBaseConfig = new DataBaseConfig();

		private void search_grad_button_Click(object sender, RoutedEventArgs e)
		{
			/*string password = "123456";
			string connStr =
				"server=localhost;user=trafostanica;database=trafostanica;port=3306;password=" + password;*/
			//string imeGrada = search_grad_textBox.Text;
			//string query = "SELECT g.id, g.naziv_grada, ts.naziv_trafostanice, tf.naziv_transformatora, tf.broj_prekidaca FROM transformator tf JOIN trafostanica ts ON tf.trafo_id = ts.id JOIN grad g ON ts.grad_id = g.id WHERE g.naziv_grada LIKE '%" + imeGrada + "%'";
			//string query = "SELECT g.id, g.naziv_grada, ts.naziv_trafostanice, tf.naziv_transformatora, tf.broj_prekidaca FROM grad g LEFT JOIN trafostanica ts ON g.id = ts.grad_id LEFT JOIN transformator tf ON tf.trafo_id = ts.id WHERE g.naziv_grada LIKE '%" + imeGrada + "%'";
			/*MySqlConnection conn = new MySqlConnection(connStr);
			conn.Open();
			MySqlCommand cmd = new MySqlCommand(query, conn);
			MySqlDataAdapter adp = new MySqlDataAdapter(cmd);
			DataSet ds = new DataSet();
			adp.Fill(ds, "search_grad_Binding");*/
			//DataTable dt = dataBaseConfig.GetTable(query);
			//dataGridGradovi.ItemsSource = dt.DefaultView;

		}
		private class Grad
		{
			public Grad()
			{
			}
			public Grad(string name, int id)
			{
				Name = name;
				Id = id;
			}

			public string Name { get; set; }
			public int Id { get; set; }
		}
		private void comboBoxGradovi_Initialized(object sender, EventArgs e)
		{
			string query = "SELECT * FROM grad";
			DataTable dt = dataBaseConfig.GetTable(query);
			foreach (DataRow row in dt.Rows)
			{
				comboBoxGradovi.Items.Add(row.ItemArray[1].ToString());
			}

			Tranfostanice.Grad grad = dataBaseConfig.GetGradovi();
			
			var test = new ObservableCollection<Grad>();
			dataGridGradovi.Columns.Clear();
			foreach (DataColumn column in dt.Columns) {
				var binding = new Binding(string.Format(column.ToString()));
				dataGridGradovi.Columns.Add(new DataGridTextColumn() { Header = column.ToString(), Binding = binding });
				var test1 = column.ToString();
			}
			foreach (DataRow row in dt.Rows)
			{
				var test1 = row["id"];
				var test2 = row["naziv_grada"];
				var smth = row.Table.Columns.ToString();
				test.Add(new Grad() {
					Id = (int)row["id"],
					Name = (string)row["naziv_grada"],
				});
			}
		//var records = new ObservableCollection<Record>(dt.Rows.);
		//var columns = records.First()
		//	.Properties
		//	.Select((x, i) => new { Name = x.Name, Index = i })
		//	.ToArray();

		//	foreach (var column in columns)
		//	{
		//		var binding = new Binding(string.Format("Properties[{0}].Value", column.Index));

		//dataGrid.Columns.Add(new DataGridTextColumn() { Header = column.Name, Binding = binding });
		//	}
}

		private void comboBoxGradovi_SelectionChanged(object sender, SelectionChangedEventArgs e)
		{
			string imeGrada = comboBoxGradovi.SelectedValue.ToString();
			string query =
				"SELECT g.naziv_grada, ts.naziv_trafostanice, tf.naziv_transformatora " +
				"FROM grad g LEFT JOIN trafostanica ts ON g.id = ts.grad_id LEFT JOIN transformator tf ON tf.trafo_id = ts.id " +
				"WHERE g.naziv_grada LIKE '%" + imeGrada + "%'";
			DataTable dt = dataBaseConfig.GetTable(query);
			dataGridGradovi.ItemsSource = dt.DefaultView;
			if (dt.Rows[0].ItemArray[1].ToString() != "")
			{
				dataGridGradovi.Columns.Clear();
				comboBoxTrafostanica.Items.Clear();

				nazivTrafostaniceLabel.Visibility = Visibility.Visible;
				comboBoxTrafostanica.Visibility = Visibility.Visible;

				napraviTabelu(dt);
				popuniComboBox(comboBoxTrafostanica, dt, 1);
				foreach (DataRow row in dt.Rows) ;
			}
			else
			{
				nazivTrafostaniceLabel.Visibility = Visibility.Hidden;
				comboBoxTrafostanica.Visibility = Visibility.Hidden;
				transformatorLabel.Visibility = Visibility.Hidden;
				comboBoxTransformator.Visibility = Visibility.Hidden;
			}
		}

		private void comboBoxTrafostanica_SelectionChanged(object sender, SelectionChangedEventArgs e)
		{
			string imeGrada = comboBoxGradovi.SelectedValue.ToString();
			string imeTrafostanice = "";
			if (comboBoxTrafostanica.HasItems)
			{
				imeTrafostanice = comboBoxTrafostanica.SelectedValue.ToString();
			}

			if (imeTrafostanice != "")
			{
				string query =
					"SELECT tf.naziv_transformatora, tf.broj_prekidaca " +
					"FROM grad g LEFT JOIN trafostanica ts ON g.id = ts.grad_id LEFT JOIN transformator tf ON tf.trafo_id = ts.id " +
					"WHERE g.naziv_grada LIKE '%" + imeGrada + "%' AND ts.naziv_trafostanice LIKE '%" + imeTrafostanice + "%'";

				DataTable dt = dataBaseConfig.GetTable(query);
				dataGridGradovi.ItemsSource = dt.DefaultView;
				if (dt.Rows[0].ItemArray[0].ToString() != "")
				{
					dataGridGradovi.Columns.Clear();
					comboBoxTransformator.Items.Clear();

					napraviTabelu(dt);
					popuniComboBox(comboBoxTransformator, dt, 0);

					transformatorLabel.Visibility = Visibility.Visible;
					comboBoxTransformator.Visibility = Visibility.Visible;
				}
				else
				{
					transformatorLabel.Visibility = Visibility.Hidden;
					comboBoxTransformator.Visibility = Visibility.Hidden;
				}
			}
			else
			{
				dataGridGradovi.Columns.Clear();
				comboBoxTransformator.Items.Clear();

				transformatorLabel.Visibility = Visibility.Hidden;
				comboBoxTransformator.Visibility = Visibility.Hidden;
			}
		}

		private void napraviTabelu(DataTable  dt) {
			foreach (DataColumn column in dt.Columns)
			{
				var binding = new Binding(string.Format(column.ToString()));
				var linkbinding = new Binding("naziv_grada");
				string nazivKolone = column.ToString();
				string[] naziv = nazivKolone.Split('_');
				string promenjenNaziv = nazivKolone.First().ToString().ToUpper() + naziv[0].Substring(1);
				if (naziv.Length > 1)
				{
					promenjenNaziv += " " + naziv[1];
				}
				

				if (nazivKolone == "naziv_grada")
				{
					DataGridTemplateColumn link = new DataGridTemplateColumn() {
						Header = promenjenNaziv, CellTemplate = new DataTemplate()
					};
					
					dataGridGradovi.Columns.Add(link);
						//new DataGridHyperlinkColumn() { Header = promenjenNaziv, Binding = linkbinding, TargetName="_new", });
				}
				else
				{
					dataGridGradovi.Columns.Add(new DataGridTextColumn() { Header = promenjenNaziv, Binding = binding });
				}
			}
		}

		private void popuniComboBox(ComboBox comboBox, DataTable dt, int index) {
			foreach (DataRow row in dt.Rows)
			{
				comboBox.Items.Add(row.ItemArray[index].ToString());
			}
		}

		private void buttonNovaTrafostanica_Click(object sender, RoutedEventArgs e)
		{
			Window addItemView = new AddItem();
			addItemView.Show();
		}
	}
}
