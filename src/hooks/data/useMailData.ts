import { useQuery } from '@tanstack/react-query';
import { fetchEmailOnId, fetchEmails } from '../../services/firebase';

export default function useMailData() {
	// const queryClient = useQueryClient();

	function useGetMails() {
		return useQuery({
			queryKey: ['emailData'],
			queryFn: () => fetchEmails(),
		});
	}

	function useGetMailOnId(id: string) {
		return useQuery({
			queryKey: ['emailData', id],
			queryFn: () => fetchEmailOnId(id!),
		});
	}

	return {
		useGetMails,
		useGetMailOnId,
	};
}
