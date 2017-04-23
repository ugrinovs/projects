using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Trafostanice.Model;
using Trafostanice.Repository;

namespace Trafostanice.Service.ServiceImpl
{
	class TrafostanicaServiceImpl : TrafostanicaService
	{
		private TrafostanicaRepository trafostanicaRepository = new TrafostanicaRepository();
		public void delete(int id)
		{
			throw new NotImplementedException();
		}

		public List<Trafostanica> findAll()
		{
			return trafostanicaRepository.findAll();
		}

		public List<Trafostanica> findAllByGrad(Grad grad)
		{
			return trafostanicaRepository.findAllByGrad(grad);
		}

		public Trafostanica findOne(int id)
		{
			return trafostanicaRepository.findOne(id);
		}

		public Trafostanica save(Trafostanica trafostanica)
		{
			throw new NotImplementedException();
		}

		public Trafostanica saveAll(List<Trafostanica> trafostanice)
		{
			throw new NotImplementedException();
		}
	}
}
