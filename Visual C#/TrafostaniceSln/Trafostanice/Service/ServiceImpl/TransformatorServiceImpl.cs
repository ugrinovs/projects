using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Trafostanice.Model;
using Trafostanice.Repository;

namespace Trafostanice.Service.ServiceImpl
{
	class TransformatorServiceImpl : TransformatorService
	{
		private TransformatorRepository transformatorRepository = new TransformatorRepository();
		public List<Transformator> findAllByTrafostanicaAndGrad(Trafostanica trafostanica)
		{
			return transformatorRepository.findAllByTrafostanicaAndGrad(trafostanica);
		}
	}
}
